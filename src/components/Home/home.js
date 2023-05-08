import React, { useState, useEffect } from 'react';
import './home.css';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3004/products');
      const jsonData = await response.json();
      setData(jsonData);
      window.scroll(0,0)
    }
    fetchData();
  }, []);

  return (
    <div className='container'>
    
    {/* <img src='https://s3-alpha-sig.figma.com/img/6203/5369/e6dac38fc01fb28fba181a62442fd637?Expires=1684713600&Signature=fKDjHYiAH8JMxXdpF5JEWuhtcCu33I46st00b9JXk1HJtxFCVwNZ34Bes~0hAVkftwUA2YFqK2caBCXKTNUz48CPl8bRfH--zmf7AVAyqBpKvsy0kBbn8lNmtylUu5jmuVkQSiumb--3AEnWscDy2Xo67ed1FRFJTxAWccrTdreeGcUszURaZjYsCsBpUHx~9ZTsyg9eHsE0dwapPK21pd4AzioRbwT9i2v1Dk5QyrIwE8Nza2BhuREFscPS8HhI5DZgjFeZjKi8DJ-HKiOdtHbE02-7p8w949Pb-clpfU9FVp83FWee9Q9ZJlYkha-RmZ6rs61~8Ts1WkMki1zOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' width='500' height='300'></img> */}
    <div>
    <img src='https://s3-alpha-sig.figma.com/img/6183/e0fc/f2b06169d28c0cb1d2ac14bf97835119?Expires=1684713600&Signature=RFmsT-ASjwxDp6rY-0X97P4AoimM6pr0KAIIY9euSqEYA9A3juvSSkzH-h0W~j6d~Kif008Cm56RFIjDQahlcNoEn9vZxlGnJ5dLkWXRac-rButx6Sn~rvmD49Pk4zk0jOLe6xwDcdR67PBJxltjB5~qOMwVrqMsARA5z5OWqP-p-oHw8llEc5yHwf~P667Hx5dBFjgk3IxrhdsBqlm39QlOwhLyeIWHXTvnlfq-0fC49RQUyqDUffGGkzl2e8At15p4zB0zyS1EXhh2WwAWRVtBFhM032cG6sy9AGcqe-YCkDxK1EMxRbGieV7-rANTvBkxsHres~JBlfdsiqHIJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' className='kenburns-top' style={{ width: '100%', height: '100%', objectFit: 'cover' }} ></img>
    </div>
     <div className='box'>
     <div><p className='tracking-in-expand'>SYCLE</p></div>
     <div><p className='text'>***********************************</p></div>
      <div><p className='text'>WHERE FASHION MEETS SUSTAINABLITY</p></div>
     </div>
      <h1>Home Page</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
