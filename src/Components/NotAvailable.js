import { Link } from 'react-router-dom';

const NotAvailable = ({page}) => {
    return (
        <div id="NA">
            <h1>Page Not Avaialable</h1>
            <h2>The <em>{page}</em> page was not a part of the original project's scope. </h2>
            <p>This project was focused on the landing page and the table reservation feature. Feel free to navigate to either of these pages using the buttons below.</p>
            <div>
                <Link to="/reserve-a-table">
                    <button className="lgButton">Reservations</button>
                </Link>
                <Link to="/">
                    <button className="lgButton">Home</button>
                </Link>
            </div>
        </div>
    )
}

export default NotAvailable;