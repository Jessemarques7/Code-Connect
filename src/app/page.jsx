import CardPost from "@/components/CardPost";
import styles from "./page.module.css";
import Link from "next/link";

async function getAllPosts(page) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  );
  if (!response.ok) {
    console.log("wrong");
    return [];
  }
  return response.json();
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;

  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <CardPost post={post} key={posts.id} />
      ))}
      {prev && (
        <Link className={styles.nextandprev} href={`/?page=${prev}`}>
          Página anterior
        </Link>
      )}
      {next && (
        <Link className={styles.nextandprev} href={`/?page=${next}`}>
          Próxima página
        </Link>
      )}
    </main>
  );
}
