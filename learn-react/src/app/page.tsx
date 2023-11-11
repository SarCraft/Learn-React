export default function Home() {
    return (
      <>
        <h1>Portfolio</h1>
        <MyButton />
        <Avatar />
      </>
    );
}

function MyButton() {
  return (
    <button className="btn">I'm a button</button>
  );
}

function Avatar() {
  return (
    <img className="avatar" />
  );
}