import * as React from 'react';
import { Field } from 'formik';

import { default as AppSwitch, AppSwitchProps } from '../../AppSwitch';
import { Colors } from '../../../../Themes';

type FormikSwitchField = {
  fieldName: string,
  fieldProps: AppSwitchProps
}
const FormikSwitchField = (props) => {
  const { fieldName, fieldProps } = props

  const _SwitchField = React.useCallback(() => {
    return (
      <AppSwitch
        {...fieldProps}
        backgroundActive={Colors.lightPrimary}
        backgroundInactive={Colors.grey}
        circleActiveColor={Colors.primary}
        circleInActiveColor={Colors.darkGrey}
      />)
  }, [fieldProps])

  return (
    <Field
      name={fieldName}
      as={_SwitchField}
    />
  )
}

export default FormikSwitchField