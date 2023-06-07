import styled from '@emotion/styled';

export const ContactsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 16px;
`;
export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #191c26;
  padding-bottom: 8px;
`;
export const ContactsName = styled.p`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
`;
export const DeleteButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  padding: 4px 8px;
  background-color: #ff6c00;
  color: #ffffff;
  border: 1px solid #ff6c00;
  border-radius: 8px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    color: #111111;
  }
`;
