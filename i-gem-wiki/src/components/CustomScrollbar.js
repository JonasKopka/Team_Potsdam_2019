import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class CustomScrollbar extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = { top: 0 };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderView = this.renderView.bind(this);
        this.renderThumb = this.renderThumb.bind(this);
        this.renderTrack = this.renderTrack.bind(this);
    }
    handleUpdate(values) {
        const { top } = values;
        this.setState({ top });
    }
    renderView({ style, ...props }) {
      const { top } = this.state;
      const viewStyle = {
          'padding-right': 15,
      };
      return (
          <div
              className="box"
              style={{ ...style, ...viewStyle }}
              {...props}/>
      );
    }
    renderThumb({ style, ...props }) {
        const { top } = this.state;
        const thumbStyle = {
            'border-radius':'10px',
            'width': 'inherit',
            'background-color': 'rgba(0, 0, 0, 0.4)'
        };
        return (
            <div style={{ ...style, ...thumbStyle }} {...props}/>
        );
    }
    renderTrack({ style, ...props }) {
        const { top } = this.state;
        const trackStyle = {
            'width': 10 ,
            'right': 5,
            'bottom': 5,
            'top': 5,
            'border-radius': 5
        };
        return (
            <div style={{ ...style, ...trackStyle }} {...props}/>
        );
    }
    render() {
        return (
            <Scrollbars
                style={{ height: 'calc(100% - 56px)' }}
                renderView={this.renderView}
                renderThumbVertical={this.renderThumb}
                renderTrackVertical={this.renderTrack}
                onUpdate={this.handleUpdate}
                {...this.props}/>
        );
    }
}