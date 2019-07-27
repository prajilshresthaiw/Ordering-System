import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { FormattedMessage } from 'react-intl';
import ErrorMessage from '../validations/ErrorMessage';
import { resetPassword } from '../../actions/userActions';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        password: '',
        confirmPassword: '',
        token: ''
      },
      validated: false,
    };

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ formData: { ...this.state.formData, [name]: value } });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      const { formData } = this.state;
      this.props.resetPassword(formData);
    } else {
      e.stopPropagation();
    }

    this.setState({ validated: true });
  }

  render() {
    console.log(this.props);
    const { isResetting, hasRequested, status, message } = this.props;
    const { validated } = this.state;
    return (
      <div>
        <h2>Reset Password</h2>
        <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
          <Form.Group controlId="token">
            <Form.Label>Token</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              placeholder="Token"
              name="token"
              required
            />
            <ErrorMessage message={<FormattedMessage id="token_required" />} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <ErrorMessage message={<FormattedMessage id="password_required" />} />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
              name="confirmPassword"
              required
            />
            <ErrorMessage message={<FormattedMessage id="confirm_password_required" />} />
          </Form.Group>

          <Button variant="primary" type="submit">
            {
              isResetting ?
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                /> :
                <FormattedMessage id="reset_password" />
            }

          </Button>
          {
            hasRequested && status !== 200 ?
              <Alert variant="danger">{message}</Alert>
              : ''
          }
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({ resetPassword }) => resetPassword
const mapDispatchToProps = {
  resetPassword
}
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword); 