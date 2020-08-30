import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import 'scss/style.scss'

class page404 extends React.Component {

    render() {
        return(
            <div>
                <Helmet>
                    <title>Daniel Silva - 404</title>
                </Helmet>
                <div className="error-404">
                    <div>
                        <h1>404</h1>
                        <h2>Página não encontrada :(</h2>
                        <Link to="/">
                            Início
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default page404
