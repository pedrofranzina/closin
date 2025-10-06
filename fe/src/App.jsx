import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./views/Homepage";
import Register from "./views/Register";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8DC]">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={Register} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
