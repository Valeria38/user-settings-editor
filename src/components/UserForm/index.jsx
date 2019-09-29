import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setName, setEmail } from '../../redux/actions';
import { Row, Col, Typography, Icon, Input } from 'antd';
import './style.css';
const { Paragraph } = Typography;

const UserForm = ({ userData, setName, setEmail, close }) => {
  const { name, surname, email, phone } = userData;
  const [isNameExpanded, setIsNameExpanded] = useState(true);
  const [isEmailExpanded, setIsEmailExpanded] = useState(true);
  const [nameField, setNameField] = useState(name);
  const [surnameField, setSurnameField] = useState(surname);
  const [emailField, setEmailField] = useState(email);

  const handleSubmit = () => {
    setName({ name: nameField, surname: surnameField });
    setEmail({ email: emailField });
    close();
  };

  const showExpanded = field => {
    switch (field) {
      case 'name':
        setIsNameExpanded(!isNameExpanded);
        break;
      case 'email':
        setIsEmailExpanded(!isEmailExpanded);
        break;
      default:
        break;
    }
  };

  return (
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
        <Typography>
          <Paragraph className='userform__header'>
            Имя, телефон, email
            <span onClick={handleSubmit}>OK</span>
          </Paragraph>
        </Typography>
        <Typography>
          <Paragraph className='userform__title'>
            {!isNameExpanded ? (
              <span>ИМЯ ФАМИЛИЯ</span>
            ) : (
              <span>ИЗМЕНИТЬ ИМЯ И ФАМИЛИЮ</span>
            )}
            <Icon
              type={isNameExpanded ? 'up' : 'down'}
              className='userform__icon'
              onClick={() => showExpanded('name')}
            />
          </Paragraph>
          {isNameExpanded && (
            <>
              <Input
                value={nameField}
                onChange={event => setNameField(event.target.value)}
              />
              <Input
                value={surnameField}
                onChange={event => {
                  setSurnameField(event.target.value);
                }}
              />
            </>
          )}
        </Typography>
        {!isNameExpanded && (
          <Typography>
            <Paragraph className='userform__field'>
              {nameField} {surnameField}
            </Paragraph>
          </Typography>
        )}
        <Typography>
          <Paragraph className='userform__title'>
            EMAIL
            <Icon
              type={isEmailExpanded ? 'up' : 'down'}
              className='userform__icon'
              onClick={() => showExpanded('email')}
            />
          </Paragraph>
        </Typography>
        <Typography>
          {isEmailExpanded && (
            <Input
              value={emailField}
              onChange={event => setEmailField(event.target.value)}
            />
          )}
          {!isEmailExpanded && (
            <Paragraph className='userform__field'>{emailField}</Paragraph>
          )}
        </Typography>
        <Typography>
          <Paragraph className='userform__title'>PHONE</Paragraph>
        </Typography>
        <Typography>
          <Paragraph className='userform__field'>{phone}</Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  userData: state.user.dataToEdit
});

const mapDispatchToProps = dispatch => ({
  setName: newName => dispatch(setName(newName)),
  setEmail: newEmail => dispatch(setEmail(newEmail))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
