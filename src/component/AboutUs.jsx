import React from 'react';
import fsilkom from '../asset/fasilkom1.jpg';
import sej from '../asset/sej.jpg'

const AboutUs = () => {
  return (
    <div className='mt-36 mb-5'>
      <div className="relative h-500">
        <img src={fsilkom} alt="" className="object-cover brightness-50 h-96 w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-10">About Us</h1>
        </div>
      </div>
      <div className="text-center my-20">
        <p className='text-center mx-40'>
          Fasilkom UI merupakan salah satu institusi pendidikan tinggi terbaik di dunia dalam bidang
          ilmu komputer dan sistem informasi. Dengan riset yang mutakhir, start-up inovatif,
          ambisi yang besar, pembelajaran yang hands-on, dan robot-robot pintar,
          Fasilkom UI tidak hanya membayangkan masa depan, tapi juga turut membuatnya.
        </p>
      </div>
      <div className="relative h-500 mt-10">
      <img src={sej} alt="" className="object-cover brightness-50 h-96 w-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">Sejarah</h1>
        <p className="text-center text-white mx-40">
        Fakultas Ilmu Komputer UI (Fasilkom) berdiri sejak tahun 1993. Sebelum pendiriannya, 
        namanya masih pendidikan Ilmu Komputer yang kegiatannya terpusat di Pusat Ilmu Komputer (Pusilkom) UI. 
        Pendirian Fasilkom UI tidak dapat dipisahkan dari pendirian Pusilkom UI pada tahun 1972.
        </p>
      </div>
      <div>
      </div>
      </div>
    </div>
  );
}

export default AboutUs;

