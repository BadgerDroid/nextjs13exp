import Image from 'next/image';
import Link from 'next/link';
import '../../styles/globals.scss';
import HeaderHelper from './headerHelper';

const head = ({}) => {
  return (
    <div className='wrapper'>
      <HeaderHelper />
    </div>
  );
};

export default head;
