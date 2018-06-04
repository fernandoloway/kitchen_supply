import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    let errors= {};

    if (validator.isEmpty(data.identified)){
        errors.identifier = 'Field ini harus diisi';
    }

    if (validator.isEmpty(data.password)){
        errors.identifier = 'Field ini harus diisi';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}