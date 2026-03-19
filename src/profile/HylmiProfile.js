import React from 'react';
import fotoHylmi from './hylmi.jpg';

const HylmiProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        
        <div className="px-8 pb-8">
          <div className="relative -mt-16 mb-5">

            <img 
              src={fotoHylmi} 
              alt="Foto Hylmi" 
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
            />
          </div>

          
          <h1 className="text-3xl font-bold text-gray-800">Hylmi Shafiy Pranama</h1>
          <p className="text-blue-600 font-medium">Mahasiswa Vokasi TI - Kelas T2B</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <p><span className="font-semibold">Tempat Tanggal Lahir:</span> Merauke, 21 Maret 2007</p>
            <p><span className="font-semibold">Universitas:</span> Universitas Brawijaya</p>
            <p><span className="font-semibold">Program Studi:</span> Teknologi Informasi</p>
          </div>

          <hr className="my-6" />

          
          <h2 className="text-xl font-bold text-gray-800 mb-3">Deskripsi Diri</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Saya adalah seorang mahasiswa program vokasi Teknologi Informasi di 
            Universitas Brawijaya yang memiliki antusiasme tinggi dalam dunia pengembangan perangkat lunak, 
            khususnya pada sisi front-end web development. Saat ini, saya sedang aktif mengeksplorasi teknologi 
            modern seperti ReactJS dan Tailwind CSS untuk membangun antarmuka pengguna yang fungsional, responsif, 
            dan juga estetis. Melalui proyek pengerjaan tugas ini, saya belajar banyak mengenai pentingnya 
            manajemen basis kode menggunakan Git dan kolaborasi tim melalui GitHub. Saya percaya bahwa ketekunan dalam
            mempelajari logika pemrograman serta kemampuan beradaptasi dengan tren teknologi terbaru adalah kunci utama untuk menjadi seorang developer yang
            kompeten. Selain fokus pada pencapaian akademik, saya juga gemar mengeksplorasi solusi digital inovatif yang dapat memberikan
            dampak positif bagi masyarakat luas di masa depan 
          </p>
        </div>
      </div>
    </div>
  );
};

export default HylmiProfile;
