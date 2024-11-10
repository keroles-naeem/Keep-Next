import Footer from "./Footer";
import Note from "./Note";
import Header from "./Header";
const App = () => {
    return (
        <div>
            <Header />
            <Note title="keroles Naeem" content="keroles content" />
            <Note title="koko Naeem" content="keroles 1" />
            <Note title="hi Naeem" content="keroles 2" />

            <Footer />
        </div>
    );
}

export default App;