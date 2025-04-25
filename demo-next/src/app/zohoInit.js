"use client"; 

import { useEffect } from "react";

const useZohoSDK = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ZOHO) {
      window.ZOHO.CREATOR.init().then(() => {
        console.log("Zoho SDK Initialized");
      });
    } else {
      console.error("Zoho SDK not loaded.");
    }
  }, []);
};

export default useZohoSDK;

//
// ... existing imports ...

const CategoryNavBar: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isCompact, setIsCompact] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      // Show compact view when scrolling down past 100px
      if (currentScroll > 100) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }
      setScrollPosition(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className={`bg-[#1E9C89] w-full sticky top-0 z-50 transition-all duration-300 ${isCompact ? 'py-2' : ''}`}>
          {/* Row 1 */}
          <div className={`flex flex-wrap items-center ${isCompact ? 'justify-start px-8' : 'justify-center'} gap-6 py-3 px-4 text-white text-[14px] font-semibold`}>
              {categoriesRow1.map((category, index) => (
                  <div key={index} className="relative group">
                      <Link
                          href={category.link}
                          className="relative font-bold after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
                      >
                          {category.name}
                      </Link>

                      {/* ... rest of the dropdown code ... */}
                  </div>
              ))}
          </div>

          {/* Row 2 - Only show when not compact */}
          {!isCompact && (
              <div className="flex flex-wrap items-center justify-center gap-6 pb-3 px-4 text-white text-[14px] font-semibold">
                  {categoriesRow2.map((category, index) => (
                      <Link
                          href={category.link}
                          key={index}
                          className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                      >
                          {category.name}
                      </Link>
                  ))}
              </div>
          )}
      </div>
  );
};

// ... rest of the code ...