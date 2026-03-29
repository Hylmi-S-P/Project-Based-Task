import React from 'react';
import fotoAdi from './adi.jpeg';

const ProfileAdi = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        
        <div className="px-8 pb-8">
          <div className="relative -mt-16 mb-5">

            <img 
              src={fotoAdi} 
              alt="Foto Adi" 
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
            />
          </div>

          
          <h1 className="text-3xl font-bold text-gray-800">Adi Achya Rain Purworahmanto</h1>
          <p className="text-blue-600 font-medium">Mahasiswa Vokasi TI - Kelas T2B</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <p><span className="font-semibold">Tempat Tanggal Lahir:</span> Malang, 26 Maret 2006</p>
            <p><span className="font-semibold">Universitas:</span> Universitas Brawijaya</p>
            <p><span className="font-semibold">Program Studi:</span> Teknologi Informasi</p>
          </div>

          <hr className="my-6" />

          
          <h2 className="text-xl font-bold text-gray-800 mb-3">Deskripsi Diri</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            Saya adalah mahasiswa aktif di program studi vokasi Teknologi Informasi, Universitas Brawijaya. Saat ini, saya berada di Kelas T2B dan memiliki minat yang mendalam terhadap dunia pengembangan web, khususnya pada bagian front-end. Melalui penugasan Project Implementation ini, saya mendapatkan kesempatan emas untuk mengaplikasikan teori ke dalam praktik nyata. Proyek ini menantang saya untuk membangun antarmuka halaman profil interaktif menggunakan ReactJS dan mempercantik tampilannya dengan Tailwind CSS. Tidak hanya sekadar menulis kode, proyek ini juga mengajarkan saya esensi dari kolaborasi tim di dunia profesional menggunakan Git dan GitHub. Mengelola repository, membuat branch khusus secara mandiri, hingga memahami alur version control system bersama teman-teman tim memberikan pengalaman simulasi industri yang sangat berharga. Saya menyadari bahwa menjadi seorang developer yang andal tidak hanya membutuhkan kemampuan logika pemrograman yang kuat, tetapi juga kelihaian dalam bekerja sama di dalam tim. Ke depannya, saya berharap dapat terus mengasah keterampilan saya di bidang teknologi informasi, menciptakan solusi digital yang inovatif, dan siap menghadapi tantangan di dunia kerja profesional. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileAdi;