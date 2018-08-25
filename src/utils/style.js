import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
export const Header = styled.div`position: relative;`
export const Input = styled.input`
  display: inline-block;
  width: 100%;
  background: #fff;
  min-height: 4em;
  padding: 1em 2em;
  font-size: 16px;
  color: #949db3;
  line-height: 1.2em;
  word-wrap: break-word;
  white-space: normal;
  outline: 0;
  border: 0;
  border-radius: 3rem;
  box-shadow: 10px 7px 20px 1px rgba(57, 105, 232, 0.14);
  transition: box-shadow 0.4s ease, width 0.34s ease;
  &:hover {
    border-color: #96c8da;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  }
`
export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`
export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 32px;
  right: 13px;
  background-color: #3c3b3a;
  border: none;
  outline: 0;
  border-radius: 26em;
  cursor: pointer;
  width: 50px;
  height: 50px;
  box-shadow: 1px 3px 12px 2px rgba(0, 0, 0, 0.16);
  transition: box-shadow 0.3s ease, width 0.34s ease;
  &:hover {
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  }
  &:after {
    content: 'GO';
    display: block;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #eef2fc;
  }
`
export const MovieList = styled.div`
  margin-top: 1em;
  max-height: 40rem;
  overflow-y: auto;
  overflow-x: hidden;
  border-top-width: 0px;
  outline: 0px;
  border-radius: 0 0 0.28571429rem 0.28571429rem;
  transition: opacity 0.1s ease;
`
export const MatchupSearchDiv = styled.div`
  display: flex;
  align-items: center;
  }`

export const MovieItems = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: auto;
  margin: 0.4em 0;
  text-align: left;
  white-space: normal;
  word-wrap: normal;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 5px 20px 3px rgba(34, 36, 38, 0.08);
  transition: all 0.25s ease;
  &:hover {
    background: rgba(22, 28, 45, 0.78);
  }
`
export const Image = styled.img`
  width: 90px;
  height: 120px;
  margin-right: 0.5em;
`
export const Title = styled.h3`
  flex: 1;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 18px;
  color: #232323;
  margin: 0.5em 0 0.2em;
  padding: 0;
  ${MovieItems}:hover & {
    color: #eef2fc;
  }
`