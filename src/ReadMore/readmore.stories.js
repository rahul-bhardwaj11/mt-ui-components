import React from 'react';
import { storiesOf } from '@storybook/react';
import ReadMore from './index';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('ReadMore', module);
stories.addDecorator(withKnobs);

stories.add(
  'ReadMore',
  withInfo('Basic usage of the ReadMore')(() => (
    <ReadMore
      html={`
      In this form are mapped the sales stages, and the rep is specifically
      tested on the skill at each stage. Scale description; 0= No evidence of
      Skill [The rep is not able to demonstrate any of the required skills and
      behaviors expected to sell this product] ; 1= Basic level skill [The rep
      inconsistently demonstrates some but not many of the behaviors and skills
      required to sell this product]; 2= Beginner level skill [The rep
      inconsistently demonstrates many of the behavior and skills required to
      sell this In this form are mapped the sales stages, and the rep is
      specifically tested on the skill at each stage. Scale description; 0= No
      evidence of Skill [The rep is not able to demonstrate any of the required
      skills and behaviors expected to sell this product] ; 1= Basic level skill
      [The rep inconsistently demonstrates some but not many of the behaviors
      and skills required to sell this product]; 2= Beginner level skill [The
      rep inconsistently demonstrates many of the behavior and skills required
      to sell this In this form are mapped the sales stages, and the rep is
      specifically tested on the skill at each stage. Scale description; 0= No
      evidence of Skill [The rep is not able to demonstrate any of the required
      skills and behaviors expected to sell this product] ; 1= Basic level skill
      [The rep inconsistently demonstrates some but not many of the behaviors
      and skills required to sell this product]; 2= Beginner level skill [The
      rep inconsistently demonstrates many of the behavior and skills required
      to sell this In this form are mapped the sales stages, and the rep is
      specifically tested on the skill at each stage. Scale description; 0= No
      evidence of Skill [The rep is not able to demonstrate any of the required
      skills and behaviors expected to sell this product] ; 1= Basic level skill
      [The rep inconsistently demonstrates some but not many of the behaviors
      and skills required to sell this product]; 2= Beginner level skill [The
      rep inconsistently demonstrates many of the behavior and skills required
      to sell this`}
    />
  ))
);
stories.add(
  'ReadMore with html tags',
  withInfo('ReadMore with html tags')(() => (
    <ReadMore
      html={`<b>Hello</b> this form are mapped the sales stages, and the rep is
      specifically tested on the skill at each stage. Scale description; 0= No
      evidence of Skill [The rep is not able to demonstrate any of the required
      skills and behaviors expected to sell this product] ; 1= Basic level skill
      [The rep inconsistently demonstrates some but not many of the behaviors
      and skills required to sell this product]; 2= Beginner level skill [The
      rep inconsistently demonstrates many of the behavior and skills required
      to sell this In this form are mapped the sales stages, and the rep is
      specifically tested on the skill at each stage. Scale description; 0= No
      evidence of Skill [The rep is not able to demonstrate any of the required
      skills and behaviors expected to sell this product] ; 1= Basic level skill
      [The rep inconsistently demonstrates some but not many of the behaviors
      and skills required to sell this product]; 2= Beginner level skill [The
      rep inconsistently demonstrates many of the behavior and skills required
      to sell this In this form are mapped the sales stages, and the rep is
      specifically tested on the skill at each stage. Scale description; 0= No
      evidence of Skill [The rep is not able to demonstrate any of the required
      skills and behaviors expected to sell this product] ; 1= Basic level skill
      [The rep inconsistently demonstrates some but not many of the behaviors
      and skills required to sell this product]; 2= Beginner level skill [The
      rep inconsistently demonstrates many of the behavior and skills required
      to sell this In this form are mapped the sales stages, and the rep is
      specifically tested on the skill at each stage. Scale description; 0= No
      evidence of Skill [The rep is not able to demonstrate any of the required
      skills and behaviors expected to sell this product] ; 1= Basic level skill
      [The rep inconsistently demonstrates some but not many of the behaviors
      and skills required to sell this product]; 2= Beginner level skill [The
      rep inconsistently demonstrates many of the behavior and skills required
      to sell this`}
    />
  ))
);
