// resources/js/components/contexts/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  locales: Language[]; // <- ajout de la liste des langues
}

const translations: Record<Language, Record<string, string>> = {
    fr: {
        // Navigation
        "home": "Accueil",
        "health_packs": "Packs de Santé",
        "about_blockchain": "La Blockchain XH",
        "how_it_works": "Comment ça marche",
        "contact": "Contact",
        "login": "Se connecter",
        "signup": "S'inscrire",

        // Page d'accueil
        "hero_title": "Révolutionnez vos soins de santé avec XH-CareChain",
        "hero_subtitle": "Des solutions de paiement blockchain pour les maladies chroniques, avec traçabilité et récompenses de santé",
        "get_started": "Commencer",
        "learn_more": "En savoir plus",

        // Section avantages
        "secure_payments": "Paiements Sécurisés",
        "secure_payments_desc": "Utilisez le XH Token pour des transactions rapides et sécurisées",
        "reward_system": "Système de Récompense",
        "reward_system_desc": "Gagnez des tokens en améliorant votre score de santé",
        "financial_inclusion": "Inclusion Financière",
        "financial_inclusion_desc": "Accédez aux soins de santé quelle que soit votre situation bancaire",
        "health_tracking": "Suivi de Santé",
        "health_tracking_desc": "Votre dossier médical est automatiquement mis à jour et sécurisé",

        // Packs de santé
        "health_pack_title": "Nos Packs de Santé",
        "health_pack_subtitle": "Des solutions adaptées à vos besoins de santé",
        "basic_pack": "Pack Basique",
        "premium_pack": "Pack Premium",
        "family_pack": "Pack Famille",
        "chronic_care_pack": "Pack Soins Chroniques",
        "buy_now": "Acheter",
        "monthly": "/ mois",
        "consultations": "consultations",
        "medications": "médicaments inclus",
        "tests": "tests médicaux",
        "unlimited": "illimité",
        "view_all_packs": "Voir tous les packs",
        "xh_blockchain_title": "Paiement par Blockchain XH-CFA",
        "blockchain_info": "Tous nos packs santé utilisent la technologie blockchain sécurisée XH. Lorsque vous achetez un pack :",
        "secure_payment": "Votre paiement est traité via notre stable coin sécurisé XH-CFA",
        "package_auto_registered": "Votre pack santé est automatiquement enregistré dans votre dossier patient",
        "riskpool_monitors": "Le contrat RiskPool surveille votre score de santé",
        "earn_tokens": "Vous gagnez des jetons XH en améliorant vos indicateurs de santé",

         //Comment ça marche
         "how_it_works-1": "Comment ça marche",
         "how_blockchain_works": "Comment notre blockchain révolutionne les soins de santé",
         "step1_title": "Choisissez votre Pack Santé",
         "step1_description_1": "Parcourez notre sélection de packs de santé et choisissez celui qui correspond à vos besoins. Chaque pack offre différents niveaux de couverture pour les consultations, médicaments et tests médicaux.",
         "step1_description_2": "Browse our selection of health packs and choose the one that matches your needs. Each pack offers different levels of coverage for consultations, medications, and medical tests.",
         "step2_title": "Paiement Sécurisé avec XH Token",
         "step2_description_1": "Payez votre pack de santé en utilisant le XH Token ou le stablecoin XH-CFA. Toutes les transactions sont sécurisées sur notre blockchain et vous recevez immédiatement la confirmation.",
         "step2_description_2": "Pay for your health pack using XH Token or XH-CFA stablecoin. All transactions are secured on our blockchain, and you receive immediate confirmation.",
         "step3_title": "Accès aux Soins",
         "step3_description_1": "Vous recevez immédiatement l'accès à vos prestations de soins. Votre achat est automatiquement enregistré dans votre dossier patient sur la blockchain.",
         "step3_description_2": "You immediately receive access to your care benefits. Your purchase is automatically recorded in your patient record on the blockchain.",
         "step4_title": "Gagnez des Récompenses",
         "step4_description_1": "Améliorez votre HealthScore en suivant les recommandations médicales et en maintenant de bonnes habitudes de santé. Le contrat RiskPool vous récompense automatiquement avec des XH Tokens.",
         "step4_description_2": "Improve your HealthScore by following medical recommendations and maintaining good health habits. The RiskPool contract automatically rewards you with XH Tokens.",
         "ready_to_start": "Prêt à commencer?",
         "explore_packs": "Explorer les Packs de Santé",

          // Contact
          "title": "Contactez-nous",
          "description": "Nous sommes là pour répondre à vos questions sur XH-CareChain",
          "send_message": "Envoyez-nous un message",
          "name": "Nom",
          "your_name": "Votre nom",
          "email": "Email",
          "message": "Message",
          "your_message": "Comment pouvons-nous vous aider?",
          "send": "Envoyer",
          "contact_info": "Informations de Contact",
          "address": "Adresse",
          "phone": "Téléphone",
          "office_hours": "Heures d'ouverture",
          "monday_friday": "Lundi - Vendredi",
          "saturday": "Samedi",
          "sunday": "Dimanche",
          "closed": "Fermé",
          "message_sent": "Message envoyé",
          "response_soon": "Nous vous répondrons dans les plus brefs délais.",


        // Footer
        "all_rights_reserved": "Tous droits réservés",
        "privacy_policy": "Politique de Confidentialité",
        "terms": "Conditions d'Utilisation",

        // Pages blockchain
        "blockchain_title": "La Technologie XH-CareChain",
        "blockchain_subtitle": "Comment notre blockchain révolutionne les soins de santé",
        "token_info": "Information sur le XH Token",
        "token_info_desc": "Le XH Token est notre monnaie numérique pour faciliter les paiements sécurisés des services de santé",
        "stable_coin": "Stable Coin XH-CFA",
        "stable_coin_desc": "Une monnaie numérique stable indexée sur le CFA pour des transactions fiables",
        "risk_pool": "Contrat RiskPool",
        "risk_pool_desc": "Notre système d'assurance décentralisé qui récompense les comportements sains",
        "health_score": "HealthScore",
        "health_score_desc": "Un score qui évalue votre santé et détermine vos récompenses",
        "pay_with_token": "Payer avec le jeton XH",
        "pay_with_cfa": "Payer avec le XH-CFA",
        "blockchain_title-1": "XH-CareChain : Blockchain Open Source",
        "blockchain_paragraph_1": "Notre solution blockchain open source est spécialement conçue pour les soins de santé liés aux maladies chroniques. Elle offre transparence, sécurité et accès aux soins pour tous.",
        "blockchain_paragraph_2": "La XH-CareChain utilise des contrats intelligents pour automatiser les processus de paiement des soins de santé, récompenser l'engagement des patients et réduire les coûts administratifs.",
        "explore_documentation": "Explorer la documentation",
        "blockchain_features": "Fonctionnalités de la Blockchain",
        "feature_secure_transactions": "Transactions sécurisées et immuables pour tous les paiements de soins de santé",
        "feature_borderless_access": "Accès sans frontières au financement et aux services de santé",
        "feature_privacy_records": "Dossiers de santé respectueux de la vie privée avec contrôle du patient",
        "feature_token_incentives": "Incitations tokenisées pour des comportements de santé positifs",
        "token_features": "Fonctionnalités du Token",
        "token_feature_fast_transactions": "Transactions rapides et à faible coût",
        "token_feature_health_payments": "Utilisé pour tous les paiements de services de santé",
        "token_feature_earn_rewards": "Peut être gagné grâce à des améliorations de santé",
        "token_feature_exchangeable": "Échangeable avec d'autres cryptomonnaies",
        "current_token_value": "Valeur actuelle du Token XH",
        "token_value": "1 XH = 500 CFA",
        "token_economics": "Économie du Token",
        "stablecoin_benefits": "Avantages du Stablecoin",
        "stablecoin_benefit_pegged": "Indexé 1:1 avec la monnaie CFA",
        "stablecoin_benefit_stable": "Élimine les préoccupations liées à la volatilité des prix",
        "stablecoin_benefit_healthcare": "Parfait pour les paiements de services de santé",
        "stablecoin_benefit_backed": "Entièrement soutenu par des réserves de monnaie réelle",
        "reserve_ratio": "Ratio de Réserve",
        "reserve_ratio_value": "Soutenu à 100%",
        "learn_about_stablecoin": "En savoir plus sur le Stablecoin",
        "riskpool_how_it_works": "Fonctionnement du Pool de Risque",
        "riskpool_feature_smart_contracts": "Les contrats intelligents gèrent automatiquement la mutualisation des risques",
        "riskpool_feature_fund_distribution": "Les fonds sont distribués en fonction de critères de santé prédéfinis",
        "riskpool_feature_rewards": "Récompenses pour le maintien ou l'amélioration des indicateurs de santé",
        "riskpool_feature_transparency": "Distribution transparente des ressources mutualisées",
        "riskpool_details": "Détails du Pool de Risque",
        "healthscore_components": "Composants du Score de Santé",
        "healthscore_component_medication": "Adhésion régulière aux médicaments",
        "healthscore_component_consultations": "Participation aux consultations programmées",
        "healthscore_component_biomarkers": "Amélioration des biomarqueurs de santé",
        "healthscore_component_lifestyle": "Facteurs liés au mode de vie (activité, alimentation, etc.)",
        "higher_score_rewards": "Score plus élevé = Plus de récompenses",
        "score_calculation": "Calcul du Score",

        // Wallet
        "wallet": "Portefeuille",
        "xh_balance": "Solde XH Token",
        "xh_cfa_balance": "Solde XH-CFA",

        // Auth
        "no_account": "Vous n'avez pas de compte ?",
        "signup_description": "Entrez vos informations pour créer votre compte",
        "full_name": "Nom Complet",
        "password": "Mot de passe",
        "confirm_password": "Confirmez le mot de passe",
        "already_have_account": "Vous avez déjà un compte ?",
        "remember_me": "Se souvenir de moi",
        "forgot_password": "Mot de passe oublié ?",
       'login_connect': "Connectez-vous à votre compte",
        'login_desc': "Entrez votre e-mail et votre mot de passe ci-dessous pour vous connecter",
        'register_connect': "Créer un compte",
        'register_desc': "Entrez vos informations ci-dessous pour créer votre compte",

        // Simulator
        "simulator": "Simulateur",
        "rewards": "Récompenses",
        "health_score_2": "Score de santé",
        "monthly_cost": "Coût mensuel",
        "estimated_rewards": "Récompenses estimées"
      },
      en: {
        // Navigation
        "home": "Home",
        "health_packs": "Health Packs",
        "about_blockchain": "XH Blockchain",
        "how_it_works": "How it Works",
        "contact": "Contact",
        "login": "Login",
        "signup": "Sign Up",

        // Home page
        "hero_title": "Revolutionize your Healthcare with XH-CareChain",
        "hero_subtitle": "Blockchain payment solutions for chronic diseases, with traceability and health rewards",
        "get_started": "Get Started",
        "learn_more": "Learn More",

        // Benefits section
        "secure_payments": "Secure Payments",
        "secure_payments_desc": "Use the XH Token for fast and secure transactions",
        "reward_system": "Reward System",
        "reward_system_desc": "Earn tokens by improving your health score",
        "financial_inclusion": "Financial Inclusion",
        "financial_inclusion_desc": "Access healthcare regardless of your banking situation",
        "health_tracking": "Health Tracking",
        "health_tracking_desc": "Your medical records are automatically updated and secured",

        // Health packs
        "health_pack_title": "Our Health Packs",
        "health_pack_subtitle": "Solutions tailored to your health needs",
        "basic_pack": "Basic Pack",
        "premium_pack": "Premium Pack",
        "family_pack": "Family Pack",
        "chronic_care_pack": "Chronic Care Pack",
        "buy_now": "Buy Now",
        "monthly": "/ month",
        "consultations": "consultations",
        "medications": "medications included",
        "tests": "medical tests",
        "unlimited": "unlimited",
        "view_all_packs": "View all packs",
        "xh_blockchain_title": "XH-CFA Blockchain Payment",
        "blockchain_info": "All our health packs use the secure XH blockchain technology. When you purchase a pack:",
        "secure_payment": "Your payment is processed via our secure XH-CFA stable coin",
        "package_auto_registered": "Your health package is automatically registered in your patient record",
        "riskpool_monitors": "The RiskPool contract monitors your health score",
        "earn_tokens": "You earn XH Tokens as rewards for improving your health metrics",
        "pay_with_token": "Pay with XH Token",
        "pay_with_cfa": "Pay with XH-CFA",


        // Blockchain pages
        "blockchain_title": "The XH-CareChain Technology",
        "blockchain_subtitle": "How our blockchain revolutionizes healthcare",
        "token_info": "XH Token Information",
        "token_info_desc": "The XH Token is our digital currency to facilitate secure payments for health services",
        "stable_coin": "XH-CFA Stable Coin",
        "stable_coin_desc": "A stable digital currency indexed on the CFA for reliable transactions",
        "risk_pool": "RiskPool Contract",
        "risk_pool_desc": "Our decentralized insurance system that rewards healthy behaviors",
        "health_score": "HealthScore",
        "health_score_desc": "A score that assesses your health and determines your rewards",
        "blockchain_title-1": "XH-CareChain: Open Source Blockchain",
        "blockchain_paragraph_1": "Our open-source blockchain solution is specifically designed for healthcare related to chronic diseases. It offers transparency, security, and access to care for all.",
        "blockchain_paragraph_2": "The XH-CareChain utilizes smart contracts to automate healthcare payment processes, reward patient engagement, and reduce administrative costs.",
        "explore_documentation": "Explore Documentation",
        "blockchain_features": "Blockchain Features",
        "feature_secure_transactions": "Secure, immutable transaction records for all healthcare payments",
        "feature_borderless_access": "Borderless access to healthcare funding and services",
        "feature_privacy_records": "Privacy-preserving health records with patient control",
        "feature_token_incentives": "Tokenized incentives for positive health behaviors",
        "token_features": "Token Features",
        "token_feature_fast_transactions": "Fast, low-cost transactions",
        "token_feature_health_payments": "Used for all health services payments",
        "token_feature_earn_rewards": "Can be earned through health improvements",
        "token_feature_exchangeable": "Exchangeable with other cryptocurrencies",
        "current_token_value": "Current XH Token Value",
        "token_value": "1 XH = 500 CFA",
        "token_economics": "Token Economics",
        "stablecoin_benefits": "Stablecoin Benefits",
        "stablecoin_benefit_pegged": "Pegged 1:1 with CFA currency",
        "stablecoin_benefit_stable": "Removes price volatility concerns",
        "stablecoin_benefit_healthcare": "Perfect for healthcare service payments",
        "stablecoin_benefit_backed": "Fully backed by real currency reserves",
        "reserve_ratio": "Reserve Ratio",
        "reserve_ratio_value": "100% Backed",
        "learn_about_stablecoin": "Learn About Stablecoin",
        "riskpool_how_it_works": "How RiskPool Works",
        "riskpool_feature_smart_contracts": "Smart contracts automatically manage risk pooling",
        "riskpool_feature_fund_distribution": "Funds are distributed based on predefined health criteria",
        "riskpool_feature_rewards": "Rewards for maintaining or improving health metrics",
        "riskpool_feature_transparency": "Transparent distribution of pooled resources",
        "riskpool_details": "RiskPool Details",
        "healthscore_components": "HealthScore Components",
        "healthscore_component_medication": "Regular medication adherence",
        "healthscore_component_consultations": "Attendance at scheduled consultations",
        "healthscore_component_biomarkers": "Improvement in health biomarkers",
        "healthscore_component_lifestyle": "Lifestyle factors (activity, diet, etc.)",
        "higher_score_rewards": "Higher Score = More Rewards",
        "score_calculation": "Score Calculation",

        //Comment ça marche
        "how_it_works-1": "How it works",
        "how_blockchain_works": "How our blockchain is revolutionizing healthcare",
        "step1_title": "Choose your Health Pack",
        "step1_description_1": "Browse our selection of health packs and choose the one that matches your needs. Each pack offers different levels of coverage for consultations, medications, and medical tests.",
        "step1_description_2": "Parcourez notre sélection de packs de santé et choisissez celui qui correspond à vos besoins. Chaque pack offre différents niveaux de couverture pour les consultations, médicaments et tests médicaux.",
        "step2_title": "Secure Payment with XH Token",
        "step2_description_1": "Pay for your health pack using XH Token or XH-CFA stablecoin. All transactions are secured on our blockchain, and you receive immediate confirmation.",
        "step2_description_2": "Payez votre pack de santé en utilisant le XH Token ou le stablecoin XH-CFA. Toutes les transactions sont sécurisées sur notre blockchain et vous recevez immédiatement la confirmation.",
        "step3_title": "Access to Care",
        "step3_description_1": "You immediately receive access to your care benefits. Your purchase is automatically recorded in your patient record on the blockchain.",
        "step3_description_2": "Vous recevez immédiatement l'accès à vos prestations de soins. Votre achat est automatiquement enregistré dans votre dossier patient sur la blockchain.",
        "step4_title": "Earn Rewards",
        "step4_description_1": "Improve your HealthScore by following medical recommendations and maintaining good health habits. The RiskPool contract automatically rewards you with XH Tokens.",
        "step4_description_2": "Améliorez votre HealthScore en suivant les recommandations médicales et en maintenant de bonnes habitudes de santé. Le contrat RiskPool vous récompense automatiquement avec des XH Tokens.",
        "ready_to_start": "Ready to start?",
        "explore_packs": "Explore Health Packs",

         // Contact
         "title": "Contact Us",
    "description": "We are here to answer your questions about XH-CareChain",
    "send_message": "Send us a message",
    "name": "Name",
    "your_name": "Your name",
    "email": "Email",
    "message": "Message",
    "your_message": "How can we help you?",
    "send": "Send",
    "contact_info": "Contact Information",
    "address": "Address",
    "phone": "Phone",
    "office_hours": "Office Hours",
    "monday_friday": "Monday - Friday",
    "saturday": "Saturday",
    "sunday": "Sunday",
    "closed": "Closed",
    "message_sent": "Message sent",
    "response_soon": "We will respond to you as soon as possible.",

        // Footer
        "all_rights_reserved": "All Rights Reserved",
        "privacy_policy": "Privacy Policy",
        "terms": "Terms of Use",


        // Wallet
        "wallet": "Wallet",
        "xh_balance": "XH Token Balance",
        "xh_cfa_balance": "XH-CFA Balance",

        // Auth
        "no_account": "Don't have an account?",
        "signup_description": "Enter your details below to create your account",
        "full_name": "Full Name",
        "password": "Password",
        "confirm_password": "Confirm password",
        "already_have_account": "Already have an account?",
        "remember_me": "Remember me",
        'login_connect':"Log in to your account",
        'login_desc':"Enter your email and password below to log in",
        'register_connect':"Create an account",
        'register_desc':"Enter your details below to create your account",
        "forgot_password": "Forgot password?",

        // Simulator
        "simulator": "Simulator",
        "rewards": "Rewards",
        "health_score_2": "Health Score",
        "monthly_cost": "Monthly Cost",
        "estimated_rewards": "Estimated Rewards"
      },
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const locales: Language[] = ['fr', 'en'];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, locales }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
