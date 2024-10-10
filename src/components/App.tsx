import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchPhotos } from '../services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ImageModal } from './ImageModal/ImageModal';
import s from './App.module.css';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import toast, { Toaster } from 'react-hot-toast';
import { Image, User } from './App.types';

const App = () => {
  const initialUser: User = {
    name: '',
    total_likes: 0,
  };

  const [photos, setPhotos] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>('');
  const [alt, setAlt] = useState<string>('');
  const [user, setUser] = useState<User>(initialUser);

  useEffect(() => {
    // оголошуэмо функцію по запросу фото з серверу
    const getData = async () => {
      // відключаємо useEffect доки не зявиться query
      if (!query) {
        return;
      }
      try {
        setIsLoading(true); //включаємо спінер
        const { results, total_pages, total } = await fetchPhotos(query, page); //запрос на сервер АРІ
        if (!results.length) {
          throw new Error(`Oops! "${query}" - нема таких світлин`); //создаємо error, якщо повернувся пустий об'єкт
        }
        setPhotos(prev => [...prev, ...results]); // добавляємо нові фото для виводу у стейт
        const notify = () =>
          toast(`Знайшли ${total} фото. Зараз ${page} з ${total_pages} стор.`); // формуємо повідомлення про сторінки і фото
        notify(); // виводимо повідомлення

        setTotalPages(total_pages); // записуємо у стейт загальну кількість сторінок
      } catch (error) {
        console.log(error); //виводимо error у консоль
        setIsError(error as Error); //зберігаємо error у стейт
      } finally {
        setIsLoading(false); //виключаємо спінер
      }
    };

    getData(); //запускаємо функцію
  }, [page, query]);

  // Новий query і обнуляємо стейт
  const handleSetQuery = (query: string): void => {
    setQuery(query);
    setPhotos([]);
    setPage(1);
    setIsError(null);
    setTotalPages(0);
    setUser(initialUser);
  };

  const loadMore = (): void => {
    setPage(prev => prev + 1);
  };

  const openModal = (url: string, alt: string, user: User): void => {
    setShowModal(true);
    setAlt(alt);
    setModalUrl(url);
    setUser(user);
  };

  const closeModal = (): void => {
    setShowModal(false);
    setAlt('');
    setModalUrl('');
  };

  return (
    <div className={s.container}>
      <SearchBar onSubmit={handleSetQuery} />
      {isError && <ErrorMessage>{isError.message}</ErrorMessage>}
      {photos && <ImageGallery photos={photos} openModal={openModal} />}

      {isLoading && <Loader />}
      {totalPages > page && !isLoading && (
        <LoadMoreBtn onClick={loadMore} disabled={isLoading}>
          Load more
        </LoadMoreBtn>
      )}
      <ImageModal
        modalIsOpen={showModal}
        closeModal={closeModal}
        src={modalUrl}
        alt={alt}
        author={user.name}
        likes={user.total_likes}
      />
      <Toaster
        containerStyle={{
          top: 70,
          left: 20,
        }}
      />
    </div>
  );
};

export default App;

//https://api.unsplash.com/photos/?client_id=lFXn5av5ZsDCXi6o_mc9WHabuxYqEBNtnJrnxqLED2o
