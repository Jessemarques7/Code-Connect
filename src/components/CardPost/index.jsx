import Image from "next/image";
import Avatar from "../Avatar";
import styles from "./cardPost.module.css";
import Link from "next/link";

function CardPost({ post }) {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.linkCard}>
      <article className={styles.card}>
        <header className={styles.header}>
          <figure>
            <Image src={post.cover} alt="cover" width={438} height={133} />
          </figure>
        </header>
        <section className={styles.body}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p href="" className={styles.link}>
            Ver detalhes
          </p>
        </section>
        <footer className={styles.footer}>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
    </Link>
  );
}

export default CardPost;
