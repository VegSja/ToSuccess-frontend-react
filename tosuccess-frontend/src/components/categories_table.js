import { React, Component } from 'react' 
import { Table} from 'react-bootstrap'

import ColorCircle from './color_circle'

export default class CategoriesTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            backend_access_token : this.props.backendAccessToken,
            api_connection : this.props.api_connection,

            server_error : false,
            server_error_message : null,
            categories : this.props.categories,
        }
    }

    render_categories(){
        var items = []
        for(var categories in this.state.categories){
            var category_son = this.state.categories[categories]
            items.push(<tr>
                <th><ColorCircle color={category_son.color} size={"5vh"}/></th>
                <th><h3>{category_son.name}</h3></th>
            </tr>)
        }
        return items
    }

    render(){
        return(
            <Table hover>
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                        {this.render_categories()}
                </tbody>
            </Table>
        )
    }
}