import useFetch from "../../hooks/useFetch"

const Banner = () => {

  const { data, loading, error } = useFetch(
    "/banner"
  );

  return (
      <div className="Banner">
          <div className="container-fluid">
              
          </div>
    </div>
  )
}

export default Banner