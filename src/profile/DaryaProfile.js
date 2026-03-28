import React from 'react';
import fotoProfil from './darya.jpeg'; 

const DaryaProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        
        <div className="px-8 pb-8">
          <div className="relative -mt-16 mb-5">

            <img 
              src={fotoProfil} 
              alt="Foto Darya" 
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
            />
          </div>

          
          <h1 className="text-3xl font-bold text-gray-800">Darya Hanasta Widhydana</h1>
          <p className="text-blue-600 font-medium">Mahasiswa Vokasi TI</p>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <p><span className="font-semibold">Tempat Tanggal Lahir:</span> Depok, 24 Februari 2007</p>
            <p><span className="font-semibold">Universitas:</span> Universitas Brawijaya</p>
            <p><span className="font-semibold">Program Studi:</span> Teknologi Informasi</p>
          </div>

          <hr className="my-6" />

          
          <h2 className="text-xl font-bold text-gray-800 mb-3">Deskripsi Diri</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
           Saya adalah mahasiswa D3 Teknologi Informasi yang punya minat di bidang keamanan siber dan sistem. 
           Saat ini saya sedang belajar pengembangan web menggunakan ReactJS dan Tailwind CSS. 
           Selain itu, saya juga tertarik untuk memahami bagaimana membuat aplikasi yang tidak hanya berjalan dengan baik, 
           tetapi juga aman dari berbagai ancaman. Dengan latar belakang pendidikan vokasi, saya cukup terbiasa mencoba hal-hal teknis, 
           seperti mengutak-atik perangkat keras dan meningkatkan performa sistem. Saya percaya bahwa dengan memahami 
           dasar-dasar teknologi secara menyeluruh, saya bisa berkembang menjadi profesional IT yang lebih baik ke depannya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DaryaProfile;