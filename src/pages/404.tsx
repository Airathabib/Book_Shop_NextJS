import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <p>Страница не найдена, воспользуйтесь ссылкой ниже или вернитесь на предыдущую страницу</p>
            <Link href="/">
                Главная
            </Link>
        </div>
    )
}
