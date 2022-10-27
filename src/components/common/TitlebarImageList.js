import * as React from 'react';
import PropTypes from 'prop-types';
// import styled from "styled-components";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function srcset(image, size, rows = 6, cols = 6) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=fill&auto=format&dpr=2 2x`,
    };
}

function TitlebarImageList(props) {
    const cols = 6;
    return (
      <ImageList
        sx={{ minWidth: '750px', width: props.width, height: props.height }}
        variant="quilted"
        cols={cols}
        rowHeight={121}
      >
        {props.itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || cols} rows={item.rows || cols}>
              <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                  style={{'object-fit': 'contain'}}
              />
              <ImageListItemBar
                  title={item.title}
                  subtitle={item.author? item.author: ''}
                  actionIcon={
                  <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                  >
                      <InfoIcon />
                  </IconButton>
                  }
              />
          </ImageListItem>
        ))}
      </ImageList>
    );
}

TitlebarImageList.propTypes = {
    itemData: PropTypes.array.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
}

export default TitlebarImageList;

// const itemData = [
//   {
//     // img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     img: 'img/cover_letter_part.png',
//     title: 'Breakfast',
//     rows: 4,
//     cols: 4,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   }
// ];
