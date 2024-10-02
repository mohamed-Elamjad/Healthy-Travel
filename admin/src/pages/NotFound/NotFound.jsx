import Header from "../../components/Header"

const NotFound = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-gray-50 rounded-3xl">
      <Header category="Page" title="Not Found"/>
      <div>
      404 Page Not Found
      </div>
    </div>
  )
}

export default NotFound