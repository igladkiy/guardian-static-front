import React from 'react';
import cn from 'classnames';

import { Loader } from '../../../Loader';

import css from './CombinedInput.module.scss';

const CombinedInput = ({
  containerClass,
  inputClass,
  inputContainerClass,
  label,
  loaderClass,
  placeholder,
  readOnly,
  value,
  onChange,
  appendedComponents,
  name,
  error,
  type = 'text',
}) => {
  const inputClassname = cn(css.inputClass, inputClass, {
    [css.hide]: readOnly && !value,
  });

  return (
    <div className={cn(css.container, containerClass, { [css.hasError]: error && !readOnly })}>
      <div className={css.fromWrapper}>
        <div className={cn(css.input, inputContainerClass)}>
          {label && (
            <label className={css.label} htmlFor={name}>
              {label}
            </label>
          )}
          {readOnly && !value && (
            <>
              {!error ? (
                <Loader className={cn(css.loader, loaderClass)} />
              ) : (
                <input
                  readOnly={readOnly}
                  className={inputClass}
                  onChange={onChange}
                  name={name}
                  id={name}
                  type={type}
                  value='-'
                  placeholder={placeholder}
                />
              )}
            </>
          )}
          <input
            readOnly={readOnly}
            className={inputClassname}
            onChange={onChange}
            name={name}
            id={name}
            type={type}
            value={value}
            placeholder={placeholder}
          />
        </div>
        {appendedComponents.select}
      </div>

      {error && appendedComponents?.error}
    </div>
  );
};

export { CombinedInput };
