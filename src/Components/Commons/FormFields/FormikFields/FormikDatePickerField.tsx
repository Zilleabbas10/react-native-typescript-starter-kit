import * as React from 'react';
import { Field } from 'formik';
import DatePicker from 'react-native-datepicker';
import { Divider } from 'react-native-elements';
import { View, Platform } from 'react-native';
import { If } from 'react-if';
import { clone } from 'ramda';

import { Colors, Metrics, Fonts } from '../../../../Themes';
import { isEmptyOrNil } from '../../../../Utils';
import { AppText } from '../../AppStyledComponents';

type DatePickerProps = {
  onConfirmDate(date): void,
  value: any
}
type FormikDatePickerField = {
  fieldName: string,
  errorMessage: string,
  fieldProps: DatePickerProps
}

const AppDatePicker = (props: DatePickerProps) => {
  const { onConfirmDate, value = '' } = props
  const initialValue = clone(value)
  const [date, setDate] = React.useState('')

  const onCancelPress = () => {
    onConfirmDate(initialValue)
  }

  const handleDateSubmission = (date) => {
    setDate(date)
    onConfirmDate(date)
  }
  const initializeDate = () => isEmptyOrNil(value) ? new Date() : value

  return (
    <DatePicker
      date={date}
      mode="date"
      placeholder="Choose date"
      format="ll"
      minDate="1970-01-01"
      maxDate={new Date()}
      confirmBtnText="Done"
      cancelBtnText="Cancel"
      onOpenModal={() => initializeDate()}
      onCancelPress={() => onCancelPress()}
      onDateChange={(date) => handleDateSubmission(date)}
      showIcon={false}
      allowFontScaling={false}
      adjustsFontSizeToFit={true}
      customStyles={{
        dateTouchBody: {
          flexDirection: 'row',
          height: 20
        },
        dateInput: {
          top: -2,
          height: 20,
          borderWidth: 0,
          alignItems: 'flex-start'
        },
        btnTextConfirm: {
          color: Colors.blue
        },
        dateText: {
          fontSize: Fonts.size.medium,
          fontFamily: 'TTCommons-Regular'
        },
        placeholderText: {
          fontSize: Fonts.size.medium,
          fontFamily: 'TTCommons-Regular'
        },
      }}
    />
  )
}

const FormikDatePickerField = (props: FormikDatePickerField) => {
  const { fieldName, fieldProps, errorMessage } = props
  const _DatePickerField = React.useCallback(() => {
    return (<AppDatePicker {...fieldProps} />)
  }, [fieldProps])

  return (
    <>
      <Field
        name={fieldName}>
        {() => {
          return _DatePickerField()
        }}
      </Field>
      <Divider style={{ backgroundColor: !isEmptyOrNil(errorMessage) ? Colors.primary : Colors.darkGrey, height: 1.1, marginTop: Platform.OS === 'ios' ? Metrics.baseMargin - 2.5 : Metrics.baseMargin + 1 }} />
      <View style={{ flex: 1, height: 15, marginTop: 5, marginBottom: Metrics.doubleBaseMargin }}>
        <If condition={!isEmptyOrNil(errorMessage)}>
          <AppText color={Colors.error} fontSize={Fonts.size.small}>{errorMessage}</AppText>
        </If>
      </View>
    </>
  )
}

export default FormikDatePickerField