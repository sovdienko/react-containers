import React, {Component} from 'react';
import WidgetList from '../views/widget-list';
//import _ from 'lodash';
import * as widgetApi from '../../api/widget-api';

import store from '../../store';
import { connect } from 'react-redux';
import { loadSearchLayout } from '../../actions/search-layout-actions';


class WidgetListContainer extends Component {

 /*constructor() {
      super();
      this.state = {
          widgets: []
      }
  }*/

  componentDidMount()  {
    /*widgetApi.getWidgets().then(widgets => {
      this.setState({widgets: widgets})
    });*/
    widgetApi.getWidgets();
    store.dispatch(loadSearchLayout('widgets', 'Widget Results'));
  }

  /*_deleteWidget(widgetId) {
    widgetApi.deleteWidget(widgetId).then(() => {
        const newWidgets = this.state.widgets.filter(widget => widget.id !== widgetId);
        this.setState({widgets: newWidgets})
    });
  }*/

  render() {
    return (
      <WidgetList widgets={this.props.widgets}
                deleteWidget={/*widgetId => this._deleteWidget(widgetId)*/
                              widgetApi.deleteWidget
                             }/>
    );
  }

}

const mapStateProps = function(store) {
    return {
      widgets: store.widgetState.widgets
    };
}

export default connect(mapStateProps)(WidgetListContainer);
