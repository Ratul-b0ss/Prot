import React, { useMemo } from 'react'
import { ReactLenis } from 'lenis/react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const App = () => {
  // Your 24 images
  const images = [
    // --- ROW 1 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-1 row-start-1"
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-4 row-start-1" // Tall portrait card
    },
    {
      src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-8 row-start-1"
    },

    // --- ROW 2 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-3 row-start-2"
    },
    // (col-start-4 is occupied by the tall card from Row 1)
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-6 row-start-2"
    },


    // --- ROW 3 (4 Images) ---
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-1 row-start-3"
    },
    {
      src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-5 row-start-3"
    },
    {
      src: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-8 row-start-3"
    },



    // --- ROW 4 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-3 row-start-4"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-7 row-start-4"
    },


    // --- ROW 5 (4 Images) ---
    {
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-8 row-start-5"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-1 row-start-5"
    },
    {
      src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-5 row-start-5"
    },


    // --- ROW 6 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-3 row-start-6"
    },
    {
      src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-7 row-start-6"
    },
    // --- ROW 3 (4 Images) ---
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-1 row-start-7"
    },
    {
      src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-5 row-start-7"
    },
    {
      src: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-8 row-start-7"
    },



    // --- ROW 4 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-3 row-start-8"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-7 row-start-8"
    },


    // --- ROW 5 (4 Images) ---
    {
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-8 row-start-9"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-1 row-start-9"
    },
    {
      src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-5 row-start-9"
    },


    // --- ROW 6 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-3 row-start-10"
    },
    {
      src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-7 row-start-10"
    },


    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-1 row-start-11"
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-4 row-start-11" // Tall portrait card
    },
    {
      src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-8 row-start-11"
    },

    // --- ROW 2 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-3 row-start-12"
    },
    // (col-start-4 is occupied by the tall card from Row 1)
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-6 row-start-12"
    },


    // --- ROW 3 (4 Images) ---
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-1 row-start-13"
    },
    {
      src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-5 row-start-13"
    },
    {
      src: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-8 row-start-13"
    },



    // --- ROW 4 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-3 row-start-14"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-7 row-start-14"
    },


    // --- ROW 5 (4 Images) ---
    {
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-8 row-start-15"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-1 row-start-15"
    },
    {
      src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-5 row-start-15"
    },


    // --- ROW 6 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-3 row-start-16"
    },
    {
      src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-7 row-start-16"
    },
    // --- ROW 3 (4 Images) ---
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-1 row-start-17"
    },
    {
      src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-5 row-start-17"
    },
    {
      src: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-8 row-start-17"
    },



    // --- ROW 4 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-3 row-start-18"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-7 row-start-18"
    },


    // --- ROW 5 (4 Images) ---
    {
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-8 row-start-19"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-1 row-start-19"
    },
    {
      src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-5 row-start-19"
    },


    // --- ROW 6 (3 Images) ---
    {
      src: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-3 row-start-20"
    },
    {
      src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=600&q=80",
      layoutClass: "col-start-7 row-start-20"
    },

  ];

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {

    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);


    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });


    gsap.ticker.lagSmoothing(0);


    const elements = gsap.utils.toArray(".gde");
    elements.forEach((el, index) => {
      const direction = index % 2 === 0 ? 50 : -50;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom", // Starts as soon as the element enters from the bottom
          end: "bottom top",   // Ends when the element completely leaves the top
          scrub: true,         // Smoothly links timeline progress to scrollbar
        }
      });

      // Step 1: Move on X-axis as it passes through the middle of the screen
      tl.to(el, {
        x: direction,
        ease: "power1.inOut",
        duration: 1 // Relative duration in the timeline
      })
        // Step 2: Shrink height and fade out as it reaches and leaves the top
        .to(el, {
          height: "0%",
          ease: "power1.in",
          duration: 1
        });
    });
  });

  const lenisOptions = {
    duration: 1.5,       // How long the smooth-scroll animation lasts (in seconds)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium exponential easing curve
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,   // Ensure mouse wheel is smooth
    wheelMultiplier: 0.89,  // Adjust this up or down if you want scrolling faster/slower
    touchMultiplier: 2,  // Smoothness on mobile touch tracks
    infinite: false,
  }

  return (
    <>
      <ReactLenis root options={lenisOptions} />
      <main className='min-h-screen w-full bg-[#000000] text-black p-8'>
        <div className='h-screen w-full bg-transparent fixed flex z-50 items-center justify-center top-0 left-0'>
          <h1 className='text-[6rem] uppercase text-[#ffffff] text-shadow-sm text-shadow-black/30 font-bold'>Shariful Alam</h1>
        </div>
        <div className='gda grid grid-cols-8 auto-rows-[150px] gap-y-8 z-10 max-w-6xl mx-auto'>
          {images.map((item, index) => (
            <div
              key={index}
              className={`${item.layoutClass} gde bg-zinc-900 z-10 rounded-xl overflow-hidden `}
            >
              <img
                src={item.src}
                alt={`Grid item ${item.id}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80";
                }}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App