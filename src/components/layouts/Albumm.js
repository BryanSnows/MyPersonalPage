import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  return (
    <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Label>{index + 1}</Label>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
    {
        img: 'https://github.com/BryanSnows/Projeto-site-escola/blob/main/img/IMG_4218.png?raw=true',
        title: 'O setup que amo',
        author: '@bryan.snows',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: 'https://raw.githubusercontent.com/BryanSnows/Projeto-site-escola/main/img/12bb363a-33bd-4ad0-bcc1-6ec251426d85.jpeg',
        title: 'Minha primeira auditoria com Líder de Produção',
        author: '@bryan.snows',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: 'https://raw.githubusercontent.com/BryanSnows/Projeto-site-escola/main/img/2E4CA490-AE67-4A6C-A217-9E55C09792BF.jpeg',
        title: 'Adoro jogar LeagueOfLegends',
        author: '@bryan.snows',
        
      },
      {
        img: 'https://raw.githubusercontent.com/BryanSnows/Projeto-site-escola/main/img/IMG_0364.jpeg',
        title: 'Conheci o Lugar mais alto do Brasil',
        author: '@bryan.snows',
        cols: 2,
      },
      {
        img: 'https://raw.githubusercontent.com/BryanSnows/Projeto-site-escola/main/img/IMG_0646.jpeg',
        title: 'Meu Primeiro BarDeGelo',
        author: '@bryan.snows',
        cols: 2,
      },
      {
        img: 'https://raw.githubusercontent.com/BryanSnows/Projeto-site-escola/main/img/IMG_0363.png',
        title: 'Minha Primeira Surra de Frio',
        author: '@bryan.snows',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: 'https://raw.githubusercontent.com/BryanSnows/Projeto-site-escola/main/img/WhatsApp%20Image%202019-02-21%20at%2015.54.40_Original.jpeg',
        title: 'Família',
        author: '@bryan.snows',
      },
      {
        img: 'https://raw.githubusercontent.com/BryanSnows/Projeto-site-escola/main/img/ff4048db-b934-4162-b7ff-f0efe3109c7c.jpeg',
        title: 'Serra - campus do jordão',
        author: '@bryan.snows',
      },
      {
        img: 'https://raw.githubusercontent.com/BryanSnows/Projeto-site-escola/main/img/IMG_4043.jpeg',
        title: 'Os dois amores da Minha vida',
        author: '@bryan.snows',
        rows: 2,
        cols: 2,
      },
      {
        img: 'https://raw.githubusercontent.com/BryanSnows/Projeto-site-escola/main/img/bryan.PNG',
        title: 'Sorriso do meu primeiro emprego engenheiro',
        author: '@bryan.snows',
      },
    ];