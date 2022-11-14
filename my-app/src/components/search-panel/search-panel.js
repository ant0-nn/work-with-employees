import {Component} from "react"; // Імпорт компоненту з бібліотеки
import './search-panel.scss'; // Імпорт стилів

// Створюємо клас на який поширюється компонент
class SearchPanel extends Component {
    constructor(props) { // В конструктор передаємо реквізити
        super(props); // Ми передали props
        this.state = {
            term: ''
        }
    }
    // створюємо стрілочну функцію в яку передаємо елемент
    onUpdateSearch = (e) => {
        const term = e.target.value; // Повертаємо в term посилання на об'єкт який був ініціатором події
        this.setState({term}); // зміна стану компонента окремо від оголошення класу і туди передаємо term
        this.props.onUpdateSearch(term) // В функцію onUpdateSearch ередаємо term
    }
    //рендеримо
    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Знайти співробітника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel; // Експортую файл SearchPanel