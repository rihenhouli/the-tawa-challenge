import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '@rihenhouli/ttcsm_auth/lib/state';
import {getAuthState} from '@rihenhouli/ttcsm_auth/lib/selectors';
import {useNavigate } from "react-router-dom";
import {userActions } from '@rihenhouli/ttcsm_user/lib/state';
import { getUserData } from "@rihenhouli/ttcsm_user/lib/selectors";
import { ProfileInfo } from "../../organisms/profile-info/ProfileInfo";
require('./ProfileTemplate.css');
export const ProfileTemplate=()=> 
{
  const user = useSelector(getUserData)
  return(
  <div className="wrap_profile_template">
  <ProfileInfo user={user}></ProfileInfo>
</div>);
}

