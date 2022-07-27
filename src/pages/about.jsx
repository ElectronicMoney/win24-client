import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

export default function Wallet() {

    return ( 
        <React.Fragment>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item elevation={3}>
                    <Typography variant="h3" component="h1" sx={{textAlign:"center"}}>
                        ABOUT US!
                    </Typography>
                </Item>
            </Grid>


            <Grid item xs={12}>
                <Item elevation={3}>
                    <Typography variant="h5" component="p">
                        If you’re looking for a fun, innovative and trusted online betting experience then we’re your best bet. We are one of the world’s finest sportsbooks, and we’ve got thousands of live and pre-game markets available at the best odds around. Like you, we’re crazy about sports and that’s 
                        why we’re here, to bring you the best sports betting experience.
                        We believe betting is all about the thrill of the win, taking on the odds, and proving the doubters wrong. We see betting as a competitive sport itself. And we’re the arena for you to showcase your skills.
                    </Typography>

                    <Typography variant="h5" component="h3">
                        BET WHEREVER
                    </Typography>
                    
                    <Typography variant="h5" component="p">
                        We know that bettors come in all forms. Some like to sit and study the odds and others just go for it. We’ve got every angle covered. You can bet on our website, mobile or app - all are incredibly easy to use, and will allow you to bet freely, on the move wherever you are. Placing bets will only ever be one click away. And with our Cash-out feature, you’ll be able to take control of your live betting destiny.
                    </Typography>


                    <Typography variant="h5" component="h3">
                        UNRIVALLED OFFERS – WE CELEBRATE WINNERS
                    </Typography>

                    <Typography variant="h5" component="p">
                        If you’ve just entered the exciting world of MagandaBet for the first time, then you’ll be able to net a 100% Bonus up to $250 on your first deposit, with our sign-up offer, and if you’re an old-timer, don’t think you’ll be left on the bench and forgotten about.
                        You’ll have access to a whole host of great offers once you sign up, including the chance to earn Free Bets every day with our 5.00+ winner offer; price boosts on all the big events; a weekly shot at winning $10k in cash with our weekly predictor game, Perfect 10 and much more.
                        We’re winner oriented. We don’t believe in giving money back on losing bets but, instead, we reward our winners. That’s why you’ll see frequent promotions giving you the chance to double your winnings, plus free bets on winning wagers.
                    </Typography>

                    <Typography variant="h5" component="h3">
                        YOU’RE IN SAFE HANDS
                    </Typography>

                    <Typography variant="h5" component="p">
                        We make certain that all your transactions are safe and secure whilst providing you with a vast array of payment options. You can deposit with e-wallets, bank transfers, and all major credit and debit cards. All of which are available through PC, mobile and our app.
                    </Typography>

                    <Typography variant="h5" component="h3">
                        HERE FOR YOU
                    </Typography>

                    <Typography variant="h5" component="p">
                        As a bettor at MagandaBet, you are truly valued. You’ll be able to contact us at any time and our 24/7 Customer Support Service or Live Online Chat Team will be here to assist you, whatever the question.
                    </Typography>

                    <Typography variant="h5" component="h3">
                        RESPONSIBLE GAMBLING
                    </Typography>

                    <Typography variant="h5" component="p">
                        We take responsible gambling very seriously and we are committed to providing an environment that protects our players, making sure we comply with all regulated guidelines.
                    </Typography>

                    <Typography variant="h5" component="h3">
                        NOW’S THE TIME TO JOIN
                    </Typography>

                    <Typography variant="h5" component="p">
                        With Free Bets, Double Winnings, cash prizes and much more, you’d be crazy not to jump on board. What are you waiting for? Put on your orange jersey and make your MagandaBet debut today.
                    </Typography>
                </Item>
            </Grid>


            </Grid>
        </React.Fragment>
    );
}
