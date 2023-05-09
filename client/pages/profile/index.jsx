import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Nav from "../../components/nav/Nav"

function index() {
  return (
      <div>
          <Nav />
          <Header />
          <p>
              This will be the users prfile data!
          </p>
          <Footer />
    </div>
  )
}

export default index