import Header from '@/components/shared/Header';
import ImageMasonry from '@/components/shared/ImageMasonry';
import { getAllImages } from '@/lib/actions/images.action'
import { BsEye } from 'react-icons/bs';

const Gallery = async () => {
    const designs = await getAllImages({limit: 6, page: 1});

  return (
    <>
        <Header />
        <section className="container py-10">
            <p className="flex items-center text-xl space-x-2 text-black mx-auto w-fit">
                <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to right, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}>
                </span>
                <span className="font-semibold text-2xl">
                Gallery
                </span>
                <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to left, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}></span>
            </p>
            <h2 className="text-6xl text-center my-6 font-bold">
                Recently created designs by our users
            </h2>

            <ImageMasonry designs={designs} />
        </section>    
    </>
  )
}

export default Gallery