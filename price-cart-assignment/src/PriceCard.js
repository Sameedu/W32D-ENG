import React from 'react'
import "./App.css";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';

function PriceCard(props) {
  console.log(props.data)
  return <>
    <div>
      <div class="card" >
        <div class="card-body">
          <h5 class="card-title text-muted">{props.data.product}</h5>
          <h6 class="card-price">${props.data.price}<span class="period">/month</span></h6>
          <hr />
          <ul class="fa-ul">
          <li class={props.data.userEnabler?"":"text-muted"}><span class="fa-li">{props.data.userEnabler?<CheckIcon/>:<ClearIcon/>}</span> {props.data.users}</li>
              <li class={props.data.storageEnabler?"":"text-muted"}><span class="fa-li">{props.data.storageEnabler?<CheckIcon/>:<ClearIcon/>}</span> {props.data.storage}</li>
              <li class={props.data.publicProjectsEnabler?"":"text-muted"}><span class="fa-li">{props.data.publicProjectsEnabler?<CheckIcon/>:<ClearIcon/>}</span> {props.data.publicProjects}</li>
              <li class={props.data.communityAccessEnabler?"":"text-muted"}><span class="fa-li">{props.data.communityAccessEnabler?<CheckIcon/>:<ClearIcon/>}</span> {props.data.communityAccess}</li>
              <li class={props.data.privateProjectsEnabler?"":"text-muted"}><span class="fa-li">{props.data.privateProjectsEnabler?<CheckIcon/>:<ClearIcon/>}</span> {props.data.privateProjects}</li>
              <li class={props.data.phoneSupportEnabler?"":"text-muted"}><span class="fa-li">{props.data.phoneSupportEnabler?<CheckIcon/>:<ClearIcon/>}</span> {props.data.phoneSupport}</li>
              <li class={props.data.subDomainEnabler?"":"text-muted"}><span class="fa-li">{props.data.subDomainEnabler?<CheckIcon/>:<ClearIcon/>}</span> {props.data.subDomain}</li>
              <li class={props.data.reportsEnabler?"":"text-muted"}><span class="fa-li">{props.data.reportsEnabler?<CheckIcon/>:<ClearIcon/>}</span> {props.data.reports}</li>
          </ul>
          <div class="btn">
          <button type="button">BUTTON</button> 
          </div>
        </div>
      </div>
    </div>

 
  </>
}

export default PriceCard;
