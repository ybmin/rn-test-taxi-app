import React, {useEffect, useMemo, useState} from 'react';
import {css} from '@emotion/react';
import {StyleProp} from 'react-native';
import {View} from 'dripsy';

import Input from '.';
import Select from './Select';

import bankNames from '../../static/bankNames';

type InputAcountProps = {
  value: string;
  onChangeValue?: (v: string) => void;
  className?: string;
} & Parameters<typeof Input>[0];

const syncValue2Account = (value: string): [string, string] => {
  const splited = value.split(' ');
  const name: string = bankNames.includes(splited?.[0])
    ? splited?.[0]
    : bankNames[0];
  const number: string = (splited?.[1] || '').replace(/[^0-9]/g, '');
  return [name, number];
};

const syncAccount2Value = (_name: string, _number: string): string => {
  if (_number === '') return '';
  const name: string = bankNames.includes(_name) ? _name : bankNames[0];
  const number: string = _number.replace(/[^0-9]/g, '');
  return name + ' ' + number;
};

const InputAcount = ({
  value,
  onChangeValue,
  className,
  ...inputProps
}: InputAcountProps) => {
  const [_name, number] = useMemo(() => syncValue2Account(value), [value]);
  const [name, setName] = useState<string>(_name);

  useEffect(() => {
    if (number !== '') setName(_name);
  }, [_name, number]);

  const onChangeName = (nameAfter: string) => {
    setName(nameAfter);
    onChangeValue?.(syncAccount2Value(nameAfter, number));
  };
  const onChangeNumber = (numberAfter: string) => {
    onChangeValue?.(syncAccount2Value(name, numberAfter));
  };

  return (
    <View
      // sx={{
      //   display: 'flex',
      //   alignItems: 'center',
      //   gap: 10,
      //   overflow: 'hidden',
      // }}
      sx={{flex: 1, gap: 10, flexDirection: 'row'}}>
      <Select
        value={name}
        options={bankNames.map(name => ({value: name, label: name}))}
        onChangeValue={onChangeName}
      />
      <Input
        value={number}
        onChangeValue={onChangeNumber}
        // css={{flexGrow: 1, minWidth: 0}}
        {...inputProps}
      />
    </View>
  );
};

export default InputAcount;
