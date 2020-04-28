import * as React from 'react';
import { Field } from 'formik';

import { default as Picker, PickerProps } from '../Picker';

type FormikPickerProps = {
  fieldName: string,
  fieldProps: PickerProps
}
const FormikPicker = (props: FormikPickerProps) => {
  const { fieldName, fieldProps } = props
  const _PickerField = React.useCallback(() => {
    return (<Picker {...fieldProps} customInputStyle={{ paddingBottom: 3 }} />)
  }, [fieldProps])

  return (
    <Field
      name={fieldName}>
      {() => {
        return _PickerField()
      }}
    </Field>
  )
}

export default FormikPicker