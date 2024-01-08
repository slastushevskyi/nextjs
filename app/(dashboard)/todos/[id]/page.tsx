import styles from "./style.module.css";

export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <h1 className={styles.title}>{params.id}</h1>;
}
