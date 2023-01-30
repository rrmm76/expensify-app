'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
        _this.handelPick = _this.handelPick.bind(_this);
        _this.handelAddoption = _this.handelAddoption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteAll',
        value: function handleDeleteAll() {
            // this.setState (() => ({options :[]}));
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {

            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
            console.log(optionToRemove);
        }
    }, {
        key: 'handelPick',
        value: function handelPick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handelAddoption',
        value: function handelAddoption(option) {
            if (!option) {
                return 'please enter data';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'this option is already in';
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //const title ='this is probs';
            //const subtitle='this is subsite';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    handelPick: this.handelPick,
                    hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteAll: this.handleDeleteAll,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(Addoption, {
                    handelAddoption: this.handelAddoption

                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};
var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'this is from Header'
        ),
        React.createElement(
            'p',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'p',
            null,
            props.subtitle
        )
    );
};
Header.defaultProps = {
    title: "this is new d title"
    // class Action extends React.Component {
    //     render () {
    // return (
    //     <button 
    //     onClick={props.handelPick}
    //     disabled={!props.hasOptions}
    //     >
    //     what should i do ?
    //     </button>)

    //     }
    // }
};var Action = function Action(props) {
    return React.createElement(
        'button',
        {
            onClick: props.handelPick,
            disabled: !props.hasOptions
        },
        'what should i do ?'
    );
};
// class Options extends React.Component {

//     render () {
//         return (<div>
//             <button onClick={this.props.handleDeleteAll}>Remove All</button>
//         {
//             this.props.options.map((option) => <Option  key={option} optionText={option} /> 
//             )
//     }
//         </div>);
//     }
// }
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteAll },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

// class Option extends React.Component {
//     render(){
//         return (
//             <div>

//                 {this.props.optionText}
//             </div>

//         )
//     }
// }
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        ' ',
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    {
                        props.handleDeleteOption(props.optionText);
                    }
                } },
            'Remove',
            props.optionText
        )
    );
};

var Addoption = function (_React$Component2) {
    _inherits(Addoption, _React$Component2);

    function Addoption(props) {
        _classCallCheck(this, Addoption);

        var _this2 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

        _this2.handelAddoption = _this2.handelAddoption.bind(_this2);
        _this2.state = {
            error: undefined
        };

        return _this2;
    }

    _createClass(Addoption, [{
        key: 'handelAddoption',
        value: function handelAddoption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handelAddoption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handelAddoption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add New Option'
                    )
                )
            );
        }
    }]);

    return Addoption;
}(React.Component);

var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'name :',
            props.name
        ),
        React.createElement(
            'p',
            null,
            'age :',
            props.age
        )
    );
};

// ReactDOM.render(<User name="Rania" age={26} /> , document.getElementById('app'));

ReactDOM.render(React.createElement(IndecisionApp, { options: ['22', '33'] }), document.getElementById('app'));
