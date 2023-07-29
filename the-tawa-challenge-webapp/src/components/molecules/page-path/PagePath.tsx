import React, { ChangeEventHandler }      from 'react';
import PropTypes  from 'prop-types';

require('./PagePath.css');

export const PagePath = (props: { label: string | undefined; value: string | undefined; placeholder: string | undefined;type: string |(string & {});onChange: ChangeEventHandler<HTMLInputElement>| undefined  }) => (
  <div className="page_path">
  </div>
);
PagePath.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.oneOf([
      "text",
      "password",
      "email",
      "date",
      "time",
      "datetime-local",
      "search"
    ]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};
