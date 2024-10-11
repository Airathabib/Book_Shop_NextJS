export interface BooksListProps {
	books: {
			id: string;
			name: string;
			authors: string[];
			description: string;
			price: number;
			currency: string;
			rating: number;
			reviews: number;
			image: string;
	}[];
}

export interface Book {
	id: string;
	name: string;
	authors: string[];
	description: string;
	price: number;
	currency: string;
	rating: number;
	reviews: number;
	image: string;
}

export interface BookInCart {
	id: string;
	name: string;
	authors: string[];
	description: string;
	price: number;
	currency: string;
	rating: number;
	reviews: number;
	image: string;
	quantity: number;
	deliveryStatus: string;
}

export interface CartItemProps {
    book: BookInCart;
}

export interface CountButtonsProps {
	quantity: number;
	add: () => void;
	remove: () => void;
}

export interface ItemProps {
	book: {
			id: string;
			name: string;
			authors: string[];
			description: string;
			price: number;
			currency: string;
			rating: number;
			reviews: number;
			image: string;
	};
}

export interface LoadMoreButtonProps {
	setPage: React.Dispatch<React.SetStateAction<number>>;

}

export  interface Props {
    setPage: (value: number) => void;
}

export interface LoginProps {
	setIsOpened: (value: boolean) => void;
}

export interface IndexProps {
  initialBooks: {
    id: string;
    name: string;
    authors: string[];
    description: string;
    price: number;
    currency: string;
    rating: number;
    reviews: number;
    image: string;
  }[];
}


export interface StarsProps {
	rating: number;
	id: string;
}

export interface AuthState {
	loggedIn: boolean;
	emailError: string;
	passwordError: string;
}

export interface LogInArgs {
    email: string;
    password: string;
}

export interface AuthError {
	message: string;
	type: 'email' | 'password' | 'unknown';
}

export interface BooksState {
	books: Book[];
	filter: string;
	booksInCart: BookInCart[];
}

export interface FetchBooksArgs {
	filter: string;
	page: number;
}
