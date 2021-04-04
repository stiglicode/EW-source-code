# Validations schema

## Login
    1. Email
        - [ ] email valid format - DANGER
        - [ ] incorrect email - WARNING
        - [ ] require - DANGER
    2. Password
        - [ ] lenght ( min(6) ) - WARNING
        - [ ] require - DANGER
## Register
    1. First name
        - [ ] require - DANGER
    2. Last name 
        - [ ] require - DANGER
    3. Email
        - [ ] email valid format - DANGER
        - [ ] email address existing - WARNING
        - [ ] require - DANGER
    2. Password
        - [ ] lenght ( min(6) ) - WARNING
        - [ ] require - DANGER
        - [ ] match with re-password - DANGER
## Reset password page
    1. Email
        - [ ] email valid format - DANGER
        - [ ] incorrect email - WARNING
        - [ ] require - DANGER
    2. Code 
        - [ ] empty place - DANGER
        - [ ] fillded - SUCCESS
        - [ ] require - DANGER
     2. Password
        - [ ] lenght ( min(6) ) - WARNING
        - [ ] require - DANGER
        - [ ] match with re-password - DANGER
    