import Head from 'next/head'

export default function Home() {

  const hello = async () => {
    console.log('hello');
    alert('hello');
  };
  
  return (
    <>
      <p>홈</p>
      <button
      type="submit"
      className="py-2 px-3 shadow border bg-blue-500"
      disabled={false}
      onClick={() => { hello(); }}
      >
        hello
      </button>
    </>
  )
}
