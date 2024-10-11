import Banner from "@/components/banner/banner";
import DisplayContainer from "@/components/displayContainer/displayContainer";
import Menu from "@/components/menu/menu";
import BooksList from "@/components/booksList/booksList";
import LoadMoreButton from "@/components/loadMoreButton/loadMoreButton";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { setBooks } from "@/redux/booksSlice";
import { fetchBooks } from "@/redux/booksSlice";
import { IndexProps } from "@/interfaces/interfase";



export default function Home({ initialBooks }: IndexProps) {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.books);
  const filter = useAppSelector((state) => state.books.filter);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(setBooks(initialBooks));
  }, []);


  useEffect(() => {
  dispatch(fetchBooks({ filter, page }));
  }, [dispatch, filter, page]);

  return (
    <>

        <Banner />
        <DisplayContainer>
          <Menu setPage={setPage}/>
          <BooksList books={books} />
          <LoadMoreButton setPage={setPage} />
        </DisplayContainer>

    </>
  );
}


export async function getStaticProps() {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyAw8dYZxnbBh_ADDcduDpF3PWGRAcIqC14&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
  const data = await res.json();
  const books = data.items.map((book:any) => ({
    id: book.id ? book.id : Math.random(),
    name: book.volumeInfo.title ? book.volumeInfo.title : null,
    authors: book.volumeInfo.authors ? book.volumeInfo.authors : null,
    description: book.volumeInfo.description ? book.volumeInfo.description : null,
    price: book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : null,
    currency: book.saleInfo.retailPrice ? book.saleInfo.retailPrice.currencyCode : null,
    rating: book.volumeInfo.averageRating ? book.volumeInfo.averageRating : null,
    reviews: book.volumeInfo.ratingsCount ? book.volumeInfo.ratingsCount : null,
    image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null
  }))

  return {
    props: {
      initialBooks: books
    },
  }
}
