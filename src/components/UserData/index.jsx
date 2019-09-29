import React, { useState } from 'react';
import { connect } from 'react-redux';
import { List, Row, Col, Icon, Typography } from 'antd';
import UserForm from '../UserForm';
import './style.css';

const { Paragraph } = Typography;

const UserData = ({ data, dataToEdit }) => {
  const [isNameHidden, setIsNameHidden] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);

  const handleEdit = itemId => {
    // only name field is handled in this function
    if (itemId === 'name') {
      setIsNameHidden(true);
      setIsFormShown(true);
    }
  };

  const close = () => {
    setIsNameHidden(false);
    setIsFormShown(false);
  };

  return (
    <>
      <Row>
        <Col span={8}>
          <Typography className='userdata__header'>
            <div>
              <Paragraph className='userdata__header-title'>
                {dataToEdit.name} {dataToEdit.surname}
              </Paragraph>
              <Paragraph className='userdata__header-text'>
                {dataToEdit.email}
              </Paragraph>
            </div>
            <div>
              <Paragraph className='userdata__header-title'>ID 28366</Paragraph>
              <Paragraph className='userdata__header-text'>
                Demo режим
              </Paragraph>
            </div>
          </Typography>
          <List
            dataSource={data}
            renderItem={item => (
              <>
                <List.Item
                  className={
                    isNameHidden && item.id === 'name'
                      ? 'userdata__item hidden'
                      : 'userdata__item'
                  }
                  onClick={() => handleEdit(item.id)}
                >
                  {item.name}
                  <div>
                    {item.data && (
                      <span className='userdata__item-info'>{item.data}</span>
                    )}
                    <Icon type='right' className='userdata__item-icon' />
                  </div>
                </List.Item>
              </>
            )}
            bordered
          />
        </Col>
      </Row>
      {isFormShown && <UserForm close={close} />}
    </>
  );
};

const mapStateToProps = state => ({
  data: state.user.data,
  dataToEdit: state.user.dataToEdit
});

export default connect(mapStateToProps)(UserData);
