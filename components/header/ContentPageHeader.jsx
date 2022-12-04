function ContentPageHeader({title, tagline, type}) {
    return (
      <>
        <header className="text-center mt-20 bg-yellow-900">
          <h1 className="text-lg font-semibold text-orange-200">
            {type}
          </h1>
          <p className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {tagline}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-50">
            {title}
          </p>
        </header>
      </>
    );
  }
  
  export default ContentPageHeader;