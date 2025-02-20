import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ProfileCard = () => {
  const stats = [
    { label: 'BUY', value: 6 },
    { label: 'SELL', value: 5 }
  ];

  const companies = [
    { name: 'Reliance Industries', logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c714cd6b8242a84c86a910fcd2ffc7fcbaf18912e20644170c6b02663e905ff9?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072', badge: 'C' },
    { name: 'Reliance Industries', logoSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c714cd6b8242a84c86a910fcd2ffc7fcbaf18912e20644170c6b02663e905ff9?placeholderIfAbsent=true&apiKey=f5294c2440c849e09806e1501d656072', badge: 'VC' }
  ];

  return (
    <>
      <Navbar />

      <div className="flex overflow-hidden flex-col items-center px-20 pt-28 bg-black pb-20 max-md:px-5 max-md:py-24 relative">
        <div className="flex relative flex-col pb-4 w-full rounded-2xl max-w-[1150px] min-h-[280px] max-md:max-w-full">
          {/* Background Image */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8180c58adbc9e969ee32cf4624bbdd53cf3b5921822df80477344cd64f4b6a?apiKey=f5294c2440c849e09806e1501d656072"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />

          {/* Profile Header */}
          <div className="flex relative flex-wrap gap-5 justify-between px-7 py-2 w-full rounded-2xl bg-black bg-opacity-40 max-md:pr-5 max-md:max-w-full">
            <div className="my-auto text-3xl font-bold text-[#c5c5c5]">
              Mayank_Dudhatra_06 (T1)
            </div>
            <div className="flex gap-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/812b324c2827fa1052ac4ae6d00f5c858872898df9012342d0d9768710d58b7d?apiKey=f5294c2440c849e09806e1501d656072"
                alt=""
                className="object-contain shrink-0 my-auto w-10 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e16ffdde4e868e0f07e1741e7947eb45d692c8ee51e43f27b79c8e85ec0886f8?apiKey=f5294c2440c849e09806e1501d656072"
                alt=""
                className="object-contain shrink-0 aspect-square w-[45px]"
              />
            </div>
          </div>

          {/* Stats & Company Logos */}
          <div className="flex relative flex-wrap gap-5 justify-between self-center mt-7 w-full max-w-[1031px] max-md:max-w-full">
            <div className="flex gap-10 self-start font-bold text-[#c5c5c5] whitespace-nowrap">
              {stats.map((stat, index) => (
                <StatBox key={index} label={stat.label} value={stat.value} />
              ))}
            </div>
            <div className="flex gap-10 text-lg font-semibold leading-5 text-center">
              {companies.map((company, index) => (
                <CompanyLogo key={index} name={company.name} logoSrc={company.logoSrc} badge={company.badge} />
              ))}
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
};

// Stat Box Component
const StatBox = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <div className="text-5xl text-white max-md:text-4xl">{label}</div>
      <div className="self-center text-white mt-7 text-6xl max-md:text-4xl">{value}</div>
    </div>
  );
};

// Company Logo Component
const CompanyLogo = ({ name, logoSrc, badge }) => {
    return (
      <div className="relative flex flex-col self-end mt-8">
        <div className="relative">
          <img
            loading="lazy"
            src={logoSrc}
            alt={`${name} logo`}
            className="object-contain aspect-square w-[90px]"
          />
          {/* Badge for Captain (C) or Vice-Captain (VC) */}
          {badge && (
            <div className="absolute top-0 left-0 bg-neutral-900 text-white border-[2px] border-stone-300 rounded-full h-6 w-6 flex items-center justify-center text-xs font-semibold">
              {badge}
            </div>
          )}
        </div>
        <div className="self-start mt-4">{name}</div>
      </div>
    );
  };
  

export default ProfileCard;
